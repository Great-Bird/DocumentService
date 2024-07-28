"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88],{68499:e=>{e.exports=JSON.parse('{"functions":[{"name":"uuid","desc":"Luau uuid implementation\\n\\nBased off of https://gist.github.com/jrus/3197011","params":[],"returns":[{"desc":"","lua_type":"string"},{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":43,"path":"src/Util.luau"}},{"name":"updateAsync","desc":"A wrapper for UpdateAsync that retries with exponential backoff and prevents use of the throttle \'queue\'","params":[{"name":"dataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"},{"name":"transform","desc":"","lua_type":"(any, DataStoreKeyInfo) -> (any, { number }?, {}?)\\n"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"unknown"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"static","source":{"line":56,"path":"src/Util.luau"}},{"name":"getAsync","desc":"A wrapper for GetAsync that retries with exponential backoff and prevents use of the throttle \'queue\'","params":[{"name":"dataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"unknown"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"static","source":{"line":74,"path":"src/Util.luau"}}],"properties":[],"types":[],"name":"Util","desc":"A collection of utility functions for DocumentService.","source":{"line":14,"path":"src/Util.luau"}}')}}]);