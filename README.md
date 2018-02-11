### Gulp Build System Template 

This gist for [gulpfile](https://gist.github.com/Tor020/41f20722baf152e873cc876feafbe381
)

Comes packaged with bulma in .scss format in the vendor folder

npm install or yarn install

runs sass compile and watch task
```gulp```

creates a new stylesheet to show which styles are being used in the html
```gulp test ```

minifies both the css and javascript (babelify)
```gulp minify```

uglify + babel javascript
```gulp babelify```

minifies css and injects into body
```gulp bodyInjectCss```

minifies images
```gulp imageMin```

pipes html and minifies everything
```gulp plsgo```


