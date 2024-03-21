import { joinURL } from "ufo";

export default defineEventHandler((event) => {
  const apiUrl = useRuntimeConfig().apiUrl;
  const path = event.path.replace(/^\/api\//, "");
  const target = joinURL(apiUrl, path);

  return proxyRequest(event, target);
});
