"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[211],{86095:e=>{e.exports=JSON.parse('{"functions":[{"name":"assertStorable","desc":"Errors if the data passed is not storable in JSON\\n\\nRejects:\\n\\tNaN (all numbers must equal themselves)\\n\\tMixed table index types\\n\\tNon sequential tables indexed by numbers\\n\\tNon-string or number table indexes\\n\\tCyclic tables\\n\\ttype(value) == \\"userdata\\"\\n\\tFunctions\\n\\tMetatables\\n\\tThreads\\n\\tVectors","params":[{"name":"data","desc":"","lua_type":"unknown"}],"returns":[],"function_type":"static","source":{"line":57,"path":"src/SaveUtil.luau"}},{"name":"uuid","desc":"Luau uuid implementation.\\n\\nBased off of https://gist.github.com/jrus/3197011","params":[],"returns":[{"desc":"","lua_type":"string\\n"}],"function_type":"static","source":{"line":135,"path":"src/SaveUtil.luau"}},{"name":"updateAsync","desc":"A wrapper for UpdateAsync that retries with exponential backoff, prevents\\nuse of the throttle \'queue\', and allows retries to be aborted.","params":[{"name":"transform","desc":"","lua_type":"((err: string) -> (), unknown, DataStoreKeyInfo) -> (any, { number }?, {}?)"},{"name":"dataStore","desc":"","lua_type":"DataStoreInterface"},{"name":"key","desc":"","lua_type":"string\\n"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"any"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"static","yields":true,"source":{"line":154,"path":"src/SaveUtil.luau"}},{"name":"getAsync","desc":"A wrapper for GetAsync that retries with exponential backoff and prevents\\nuse of the throttle \'queue\'.","params":[{"name":"dataStore","desc":"","lua_type":"DataStoreInterface"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"any"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"static","yields":true,"source":{"line":193,"path":"src/SaveUtil.luau"}},{"name":"removeAsync","desc":"A wrapper for RemoveAsync","params":[{"name":"dataStore","desc":"","lua_type":"DataStoreInterface"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"static","yields":true,"source":{"line":215,"path":"src/SaveUtil.luau"}}],"properties":[],"types":[],"name":"SaveUtil","desc":"A collection of utility functions for handling datastores.\\n\\nIf you need to access any datastores directly while using DocumentService,\\nit is recommended you use these functions or similar implementations.","source":{"line":24,"path":"src/SaveUtil.luau"}}')}}]);