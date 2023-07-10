export default defineEventHandler((event) => {
  event.node.res.setHeader('Access-Control-Allow-Origin', '*');
})
