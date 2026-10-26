// Without VitePress's bundled Inter: the theme sets its own font stacks, so
// Inter was a 72 KB preload no text used.
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'

export default DefaultTheme
