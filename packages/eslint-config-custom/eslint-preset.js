module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/nextjs/",
        "apps/expo-rn/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
