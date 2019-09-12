{
  "name": "{{ projectName }}",
  "version": "1.0.0",
  "description": "{{ description }}",
  "scripts": {
    "start": "nowa2 start",
    "build": "nowa2 build",
    "precommit": "lint-staged",
    "test": "jest",
    "upgrade": "nowa2 upgrade"
  },
  "engines": {
    "node": ">= 8.9.0",
    "npm": ">=6.1.0"
  },
  "nowa": {
    "solution": "@recore/solution"
  },
  "dependencies": {
    "@recore/fx": "^0.8.0",
    "react": "^16"
  },
  "devDependencies": {
    "@recore/solution": "^0.8.0",
    "@recore/recore-loader": "^0.8.0",
    "@recore/config": "^2.0.0",
    "@nowa/cli": "^0.6",
    "@types/jest": "^21",
    "@types/node": "^12.7.5",
    "@types/react": "^16",
    "babel-eslint": "^10.0.3",
    "eslint": "^5.16.0",
    "husky": "^1.1.2",
    "jest": "^24",
    "lint-staged": "^7.1.2",
    "prettier": "^1.18.2",
    "tslib": "^1.9.3",
    "typescript": "^3.6.3"
  },
  "lint-staged": {
    "./src/**/*.{ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}
