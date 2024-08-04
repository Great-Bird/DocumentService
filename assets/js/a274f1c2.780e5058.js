"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88],{68499:e=>{e.exports=JSON.parse('{"functions":[{"name":"uuid","desc":"Luau uuid implementation\\n\\nBased off of https://gist.github.com/jrus/3197011","params":[],"returns":[{"desc":"","lua_type":"string"},{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":62,"path":"src/Util.luau"}},{"name":"updateAsync","desc":"A wrapper for UpdateAsync that retries with exponential backoff and prevents use of the throttle \'queue\'","params":[{"name":"dataStore","desc":"","lua_type":"GlobalDataStore"},{"name":"key","desc":"","lua_type":"string"},{"name":"transform","desc":"","lua_type":"(any, DataStoreKeyInfo) -> (any, { number }?, {}?)\\n"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"unknown"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"static","yields":true,"source":{"line":77,"path":"src/Util.luau"}},{"name":"getAsync","desc":"A wrapper for GetAsync that retries with exponential backoff and prevents use of the throttle \'queue\'","params":[{"name":"dataStore","desc":"","lua_type":"GlobalDataStore"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"unknown"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"static","yields":true,"source":{"line":97,"path":"src/Util.luau"}},{"name":"setAsync","desc":"A wrapper for SetAsync that retries with exponential backoff and prevents use of the throttle \'queue\'.\\n\\nI recommend you only use this for edge cases like erasing data.","params":[{"name":"dataStore","desc":"","lua_type":"GlobalDataStore"},{"name":"key","desc":"","lua_type":"string"},{"name":"value","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","yields":true,"source":{"line":119,"path":"src/Util.luau"}},{"name":"deepFreeze","desc":"Deeply freezes a table (not entering metatables)","params":[{"name":"object","desc":"table to freeze","lua_type":"T"}],"returns":[{"desc":"","lua_type":"frozenTable"}],"function_type":"static","source":{"line":136,"path":"src/Util.luau"}},{"name":"assertStorable","desc":"Errors if the data passed is not storable in JSON\\n\\nRejects:\\n\\tNaN (all numbers must equal themselves)\\n\\tMixed table index types\\n\\tNon sequential tables indexed by numbers\\n\\tNon-string or number table indexes\\n\\tCyclic tables\\n\\ttype(value) == \\"userdata\\"","params":[{"name":"data","desc":"","lua_type":"unknown"}],"returns":[],"function_type":"static","source":{"line":171,"path":"src/Util.luau"}}],"properties":[],"types":[],"name":"Util","desc":"A collection of utility functions for handling datastores.\\n\\nIf you need to access any datastores directly while using DocumentService, it is recommended you use these\\nfunctions or similar implementations.","source":{"line":16,"path":"src/Util.luau"}}')}}]);