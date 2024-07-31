export const routers = (subDomain: string) => {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return `http://${subDomain}.localhost:3000`;
  }

  // custom domains
  return `http://${subDomain}.localhost:3000`;
};
