(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'bingo.core
   :output-to "out/bingo.js"
   :output-dir "out"})
