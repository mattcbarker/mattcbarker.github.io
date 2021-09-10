    module.exports = {
        chainWebpack: config => {
          config
          .plugin('html')
          .tap(args => {
            args[0].title = 'Matt Barker-Web Developer'
            return args
          })
        }
      }