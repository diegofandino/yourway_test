export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
	  "^.+\\.tsx?$": "ts-jest",
	},
	globals: {
	  "ts-jest": {
		tsconfig: "tsconfig.json" 
	  }
	},
	moduleNameMapper: {
	  "\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], 
  };