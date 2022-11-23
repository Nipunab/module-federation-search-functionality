(self["webpackChunkhmf_module_template"]=self["webpackChunkhmf_module_template"]||[]).push([[805],{1805:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"book-store"},[o("h1",[e._v("Bookstore")]),o("h2",[e._v("Please select an author")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedAuthor,expression:"selectedAuthor"}],on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedAuthor=t.target.multiple?o:o[0]},e.onSelected]}},[o("option",{attrs:{disabled:"",value:""}},[e._v("Select")]),e._l(e.authors,(function(t){return o("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2),o("hr")]),e.author?o("author-books",{attrs:{author:e.author.name,books:e.author.books},on:{buy:e.onBuy}}):e._e()],1)},r=[],a=(o(33948),o(70655)),i=o(59028);const s=[{id:1,name:"J.K. Rowling",books:[{id:"1",title:"Harry Potter and the Philosopher’s Stone",description:"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",image:"https://via.placeholder.com/150"},{id:"2",title:"Harry Potter and the Chamber of Secrets",description:"Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",image:"https://via.placeholder.com/150"},{id:"3",title:"Harry Potter and the Prisoner of Azkaban",description:"Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third novel in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort's old allies.",image:"https://via.placeholder.com/150"},{id:"4",title:"Harry Potter and the Goblet of Fire",description:"Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",image:"https://via.placeholder.com/150"}]},{id:2,name:"J.R.R. Tolkien",books:[{id:"1",title:"The Hobbit",description:"The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",image:"https://via.placeholder.com/150"},{id:"2",title:"The Lord of the Rings",description:"The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",image:"https://via.placeholder.com/150"},{id:"3",title:"The Silmarillion",description:"The Silmarillion is a collection of tales set in the world of Arda, written by J. R. R. Tolkien. It is the first published book-length history of Middle-earth, and is considered by many to be the first draft of The Lord of the Rings. The Silmarillion was published in 1977, after Tolkien's death, by his son Christopher, who edited the work for publication.",image:"https://via.placeholder.com/150"}]}];var l=s;let h=class extends i.Vue{constructor(){super(...arguments),this.selectedAuthor=0,this.authors=l,this.author=null}onSelected(){this.author=this.authors.find((e=>e.id===this.selectedAuthor))}onBuy(e){alert("You bought ".concat(e.title," by module federation"))}};h=(0,a.gn)([(0,i.Component)({name:"HelloView",components:{"author-books":()=>o.e(469).then(o.t.bind(o,81469,23))}})],h);var d=h,c=d,u=(o(44841),o(1001)),f=(0,u.Z)(c,n,r,!1,null,"0e653d3e",null),m=f.exports},22585:function(e,t,o){"use strict";o.r(t);var n=o(87537),r=o.n(n),a=o(23645),i=o.n(a),s=i()(r());s.push([e.id,".book-store[data-v-0e653d3e]{margin-top:60px;display:flex;flex-direction:column;align-items:center}.book-store>h1[data-v-0e653d3e]{font-size:3rem}.book-store>select[data-v-0e653d3e]{width:100%;max-width:500px}","",{version:3,sources:["webpack://./src/views/Hello.vue"],names:[],mappings:"AAmDA,6BACE,eAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,gCACE,cAAA,CAEF,oCACE,UAAA,CACA,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.book-store {\n  margin-top: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > h1 {\n    font-size: 3rem;\n  }\n  > select {\n    width: 100%;\n    max-width: 500px;\n  }\n}\n"],sourceRoot:""}]),t["default"]=s},44841:function(e,t,o){var n=o(22585);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var r=o(54402).Z;r("123a26a9",n,!0,{sourceMap:!0,shadowMode:!1})}}]);
//# sourceMappingURL=805.0c336d18.js.map