import { obx, prop, ViewController, autorun } from '@recore/fx';

export default class Todo extends ViewController {
  // 定义响应式变量
  @obx todoList = [{
    title: "示例 TODO",
    completed: false,
    edit: false
  }];
  @obx newTodo = '';
  @prop params = {
    status: 'all',
  };
  get status() {
    const st = this.params.status;
    return ['all', 'active', 'completed'].includes(st) ? st : 'all';
  }
  @obx get todosByStatus() {
    if ('all' === this.status) return this.todoList;
    const f = this.status === 'completed' ? true : false;
    return this.todoList.filter((item) => {
      return item.completed === f;
    })
  }
  @obx editing: HTMLElement | null = null;
  @obx get hasItemCompleted() {
    return this.todoList.some(todo => !!todo.completed === true);
  }
  @obx get allDone() {
    return !this.todoList.some(todo => !!todo.completed === false);
  }

  set allDone(value) {
    this.todoList.forEach(todo => todo.completed = !!value);
  }

  // 组件/页面初始化时调用
  $init() {
    try {
      const data = JSON.parse(localStorage.getItem('todos') as any);
      if (data) {
        this.todoList = data.map((item: any) => {
          return {
            title: item.title || '',
            completed: item.completed || false,
            edit: false,
          };
        });
      }
    } catch (e) {}

    autorun(({ firstRun }) => {
      const data = JSON.stringify(this.todoList);
      if (this.editing) {
        this.editing.focus();
      }
      if (!firstRun) {
        localStorage.setItem('todos', data);
      }
    });
  }

  // 清除所有完成的 todo
  removeCompleted() {
    this.todoList = this.todoList.filter((item)=>{
      return item.completed === false;
    })
  }

  // 新增
  add() {
    const title = this.newTodo.trim();
    if (!title) {
      return;
    }
    if(title.length > 0){
      this.todoList.push({title, completed: false, edit: false});
      this.newTodo = '';
    }
  }

  //移除一条
  remove(item: any) {
    const i = this.todoList.indexOf(item);
    if (i > -1) {
      this.todoList.splice(i, 1);
    }
  }

  edit(item: any) {
    item.edit = true;
  }

  update(e: KeyboardEvent, item: any) {
    if (e.type === "keyup" && 13 !== e.keyCode){
      return;
    }
    e.preventDefault();
    item.edit = false;
    this.editing = null;
  }
}
