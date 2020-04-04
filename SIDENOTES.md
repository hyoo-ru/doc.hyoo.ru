
## вопросы

- как глобально добавить mam и будет ли автокомлит в этом случае?
- как декларация компонента превращается в html или другое представление
- чем mol является и чем не является? SPA? бизнес-приложения, сайты?
- где проходит граница между фреймворком и набором готовых компонент
- почему tree и какие варианты?
    
    https://github.com/eigenmethod/mol/wiki/View-formats
    
- как сделать SSR

        надо просто по аналогии с $mol_build_server, срендерить в строку 
        через jsdom в мидлваре, подменив контексты через 
        https://github.com/eigenmethod/mol/tree/master/ambient
        форкать mam по идее тебе не надо, надо создать свой неймспейс, 
        как hyoo, в нем накропать сервер
        
        1. выкинь то, что ты наделал)
        2. склонируй mam,
        3. создай в нем hyoo/doc/server.node.ts с этой строчкой, ну в res выведи пока Hello
        4. собери npm start hyoo/doc
        5. запусти node hyoo/doc/-/node.test.ts
        
        Мидльварь
        const jsdom =  new $node.jsdom.JSDOM( '' , { url : 'https://localhost/' } )
        
        const app = $hyoo_doc.make({ $: { ...$,  $mol_dom_context = jsdom.window as any} })
        
        $mol_fiber_async(() => app.toString())
          .then(data => res.send(`<html><body>${data}<script....></script></body></html>`))

        
        Как-то так.
        const app = $my_app.create( app => {
            app.$ = $mol_ambient({
                $mol_state_arg : class extends $mol_state_arg {
                   static href() { return req.params._escaped_fragment_ }
                }
            })
        } )
        
        app.dom_tree().outerHTML

## ссылки

- статья об атомах https://habr.com/ru/post/235121/ (продолжение https://habr.com/ru/post/240773/), 
    реализация https://github.com/eigenmethod/mol/blob/master/atom2/atom2.ts
    прикольный доклад из комментариев https://www.youtube.com/watch?v=R4sTvHXkToQ
    https://habr.com/ru/post/317360/
    https://habr.com/ru/post/416361/   


## примечания

- постледовательный запуск npm install и потом npm start, на каждом этапе вносит изменения 
в package.json проекта, что является достаточно неожиданным


