// (function() {
//     'use strict';
//
//     var byId = function(id) {
//             return document.getElementById(id);
//         },
//
//         loadScripts = function(desc, callback) {
//             var deps = [],
//                 key, idx = 0;
//
//             for (key in desc) {
//                 deps.push(key);
//             }
//
//             (function _next() {
//                 var pid,
//                     name = deps[idx],
//                     script = document.createElement('script');
//
//                 script.type = 'text/javascript';
//                 script.src = desc[deps[idx]];
//
//                 pid = setInterval(function() {
//                     if (window[name]) {
//                         clearTimeout(pid);
//
//                         deps[idx++] = window[name];
//
//                         if (deps[idx]) {
//                             _next();
//                         } else {
//                             callback.apply(null, deps);
//                         }
//                     }
//                 }, 30);
//
//                 document.getElementsByTagName('head')[0].appendChild(script);
//             })()
//         },
//
//         console = window.console;
//
//
//     if (!console.log) {
//         console.log = function() {
//             alert([].join.apply(arguments, ' '));
//         };
//     }
//
//     Sortable.create(byId('player-section'), {
//         animation: 150,
//         draggable: '.tile',
//         handle: '.tile__name'
//     });
//
//     [].forEach.call(byId('player-section').getElementsByClassName('tile-list'), function(el) {
//         Sortable.create(el, {
//             group: 'photo',
//             animation: 150
//         });
//     });
//
// })();
$(function() {
    $(".avatar").draggable({
        revert: "invalid",
        helper: "clone",
        stack: ".avatar"
    });
    $(".avatar").sortable();
    $(".tile-list").droppable({
        drop: function (event, ui) {
                var teamContainer = $(this);
                movePlayer(ui.draggable, teamContainer);
            }
    });


    function movePlayer($item, $team) {
        $team.append($item);
    }

    $("#reset-button").click(function (){
        $("#white-team-list > .avatar").appendTo("#pool-team-list");
        $("#black-team-list > .avatar").appendTo("#pool-team-list");
    });

});
