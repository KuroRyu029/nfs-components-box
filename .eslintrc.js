module.exports = {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest/globals": true
    },
    "extends": [
      "airbnb"
    ],
    "plugins": [
      "react",
      "jsx-a11y",
      "import",
      "filenames",
      "mocha",
      "jest"
    ],
    "parser": "babel-eslint",
    "rules": {
      "object-shorthand": 0,
      "no-param-reassign": 0,
      "no-nested-ternary": 0,
      "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js"]}],
      "filenames/match-regex": [2, "^[A-Za-z\-\.]+$"],
      "filenames/match-exported": 0,
      "filenames/no-index": 0,
      "mocha/no-exclusive-tests": "error",
      "indent": [2, 2],
      "linebreak-style": [0, "unix"],
      "linebreak-style": [0, "windows"],
      "no-console": 0,
      "no-unused-vars": 1,
      "quotes": [2, "single"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/no-unescaped-entities": 0,
      "react/prefer-stateless-function": 0,
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 2,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
      "semi": [2, "never"],
      "strict": [2, "never"],
    }
  
  };
  