export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
	  "^.+\\.tsx?$": "ts-jest",
	},
	globals: {
	  "ts-jest": {
		tsconfig: "tsconfig.json" // Aquí le decimos que use tu tsconfig principal
	  }
	},
	moduleNameMapper: {
	  "\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // o setupTests.ts, según el archivo que tengas
  };