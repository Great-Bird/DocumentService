"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{24936:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new Document class\\n\\nDon\'t create more than one Document for the same key, they will be considered different sessions.","params":[{"name":"props","desc":"","lua_type":"DocumentProps"}],"returns":[{"desc":"","lua_type":"Document<T>\\n"}],"function_type":"static","private":true,"source":{"line":171,"path":"src/Document.luau"}},{"name":"Open","desc":"Validates the document if one exists, or creates a default document if no\\ndocument exists.\\n\\nYou must call this method before reading or writing to a Document.\\n\\n:::info\\nThis method looks at documentServiceFormatVersion to assume the\\ntype of values stored in DataStore keys - Data generated by DocumentService\\nis not validated, so if you manually edit anything in keys managed by\\nDocumentService, apart from data, expect errors to be thrown. If a valid\\nversion isn\'t specified, it will assume we are migrating from no library\\nto DocumentService and put the existing contents of the key into the .data\\nfield.\\n\\nYou are free to edit the contents of the table in the .data field with\\na tool like DataStore Editor, but corrupting other data could cause your\\nserver scripts to break.\\n:::\\n\\n:::tip\\nSession locking prevents your data from being edited by mutliple servers,\\nand ensures one server is finished with it before it is opened by another.\\n\\nIn DocumentService, session locking enables the use of the caching methods\\n`SetCache`, `GetCache`, and `UpdateCache`.\\n\\nThis is ideal for player data, or any data that needs frequent updates\\nand does not need multi-server editing.\\n\\nYou can enable session locking with the shouldLock argument.\\n:::\\n\\n:::warning\\nLike all methods which return Result<T>, this can fail for reasons outside\\nof the programmer\'s control. You should check for and handle these possible\\nerrors (stated above). Errors that are the fault of the programmer are\\nthrown directly.\\n:::\\n\\n:::warning\\nOnce a Document is open, no more validations take place. If data is\\ncorrupted externally while a session is open, it may cause unexpected\\nerrors. Session-locked sessions may also overwrite any data you change.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":262,"path":"src/Document.luau"}},{"name":"Close","desc":"Destroys the document instance.\\n\\nIf session locked, will save the document and remove the lock first.\\n\\nAfter closing a Document, you will need to call \\nDocumentStore:GetDocument() to retrieve a new one if you wish to access the\\nDocument again.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":405,"path":"src/Document.luau"}},{"name":"SetCache","desc":"Sets the cache.\\n\\n:::warning\\nYou can only use cache for session-locked data. See `Open` for how to\\nenable session locking.\\n:::\\n\\n:::info\\nYou must use immutable operations on cache, i.e. clone any table you intend to edit.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"newCache","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"newCache"}],"function_type":"static","source":{"line":444,"path":"src/Document.luau"}},{"name":"GetCache","desc":"Retrieves the cache.\\n\\n:::warning\\nYou can only use cache for session-locked data. See `Open` for how to\\nenable session locking.\\n:::\\n\\n:::info\\nYou must use immutable operations on cache, i.e. clone any table you intend to edit.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"cache"}],"function_type":"static","source":{"line":467,"path":"src/Document.luau"}},{"name":"UpdateCache","desc":"Transforms the cache.\\n\\n:::warning\\nYou can only use cache for session-locked data. See `Open` for how to\\nenable session locking.\\n:::\\n\\n:::info\\nYou must use immutable operations on cache, i.e. clone any table you intend to edit.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"transform","desc":"","lua_type":"Transform<T>"}],"returns":[{"desc":"","lua_type":"cache"}],"function_type":"static","source":{"line":489,"path":"src/Document.luau"}},{"name":"Read","desc":"Reads from the DataStore.\\n\\nCan fail due to `RobloxAPIFail`, `SessionLocked`.\\n\\n:::warning\\nOverwrites the cache. If you are using session locking, you should only read once.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"result containing the data read","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":511,"path":"src/Document.luau"}},{"name":"Update","desc":"Performs an atomic transaction on the Document, writing to the DataStore.\\n\\nIf using session locking, transforms will build on cached data.\\n\\nErrors if data is not storable or the transform return value is invalid.\\n\\nCan fail due to `RobloxAPIFail` or `SessionLocked`.\\n\\n:::tip\\nDue to Luau limitations with the old solver, you will get the\\nbest experience if you manually annotate the type of the transform parameter.\\n:::\\n\\n:::warning\\nThe transform function must not yield, and shouldn\'t rely on any\\nfrom outside.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"transform","desc":"Transform function for the transaction.","lua_type":"Transform<T>"}],"returns":[{"desc":"Result containing the new data.","lua_type":"result"}],"function_type":"static","yields":true,"source":{"line":576,"path":"src/Document.luau"}},{"name":"Save","desc":"Saves a Document\'s cache to its DataStore. Equivalent to calling Update\\nwithout transforming the data.\\n\\nCan fail due to `RobloxAPIFail` or `SessionLocked` (in the case the lock is stolen).\\n\\n:::warning\\nYou can only use cache for session-locked data. See `Open` for how to\\nenable session locking.\\n:::","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"ReadWriteResult<T>\\n"}],"function_type":"static","yields":true,"source":{"line":698,"path":"src/Document.luau"}},{"name":"Erase","desc":"Wipes all data associated with the key and closes the document.\\n\\nCan fail due to `RobloxAPIFail`.\\n\\nSatisfies compliance with GDPR right of erasure.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"Result<nil, RobloxAPIError>\\n"}],"function_type":"static","yields":true,"source":{"line":716,"path":"src/Document.luau"}},{"name":"Peek","desc":"Reads the data of a potentially locked or unopened Document.\\n\\nCan fail due to `RobloxAPIFail`.\\n\\nDoes not update the cache.\\n\\nIf the data is not a table or not in the DocumentService format (see KeyData<T>),\\nthe data will be nil.","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[{"desc":"","lua_type":"Result<any, RobloxAPIError>\\n"}],"function_type":"static","yields":true,"source":{"line":744,"path":"src/Document.luau"}},{"name":"HookBefore","desc":"Attaches a hook which occurs before the event.\\n\\nNote that if a hook yields, it will yield all methods that call it. Hooks\\nare called in the order they are added.\\n\\nHooks cannot currently mutate arguments.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"event","desc":"the operation to call the hook before","lua_type":"PreHookEvent"},{"name":"hook","desc":"a hook function that receives the arguments passed in to the operation","lua_type":"() -> ()"}],"returns":[],"function_type":"static","source":{"line":778,"path":"src/Document.luau"}},{"name":"HookAfter","desc":"Attaches a hook which occurs after the event, before the method returns.\\n\\nNote that if a hook yields, it will yield all methods that call it. Hooks\\nare called in the order they are added.\\n\\nHooks added with HookAfter only run if the operation is successful, and\\ncannot mutate the result.","params":[{"name":"self","desc":"","lua_type":"Document<T>"},{"name":"event","desc":"the operation to call the hook after","lua_type":"PostHookEvent"},{"name":"hook","desc":"a hook function that receives the arguments passed in to the operation","lua_type":"() -> ()"}],"returns":[],"function_type":"static","source":{"line":794,"path":"src/Document.luau"}},{"name":"__tostring","desc":"","params":[{"name":"self","desc":"","lua_type":"Document<T>"}],"returns":[],"function_type":"static","ignore":true,"source":{"line":801,"path":"src/Document.luau"}},{"name":"isDocument","desc":"Checks if a metatable passed is a Document.","params":[{"name":"instance","desc":"","lua_type":"metatable"}],"returns":[{"desc":"is it a Document","lua_type":"isDocument"}],"function_type":"static","source":{"line":811,"path":"src/Document.luau"}}],"properties":[],"types":[{"name":"DocumentProps","desc":"","fields":[{"name":"key","lua_type":"string","desc":"The datastore key"},{"name":"dataStore","lua_type":"DataStore","desc":"The object returned by DataStoreService:GetDataStore()"},{"name":"check","lua_type":"(unknown) -> (boolean, T)","desc":"A type check function for your data, errors if types are invalid"},{"name":"default","lua_type":"T","desc":"Default values, which are set if keys are empty"},{"name":"migrations","lua_type":"Types.Migrations<T>","desc":"Migrations"},{"name":"sessionLock","lua_type":"boolean","desc":"Should the document be session locked?"}],"private":true,"source":{"line":162,"path":"src/Document.luau"}}],"name":"Document","desc":"An abstraction over key, value pairs in a DataStore.","source":{"line":16,"path":"src/Document.luau"}}')}}]);