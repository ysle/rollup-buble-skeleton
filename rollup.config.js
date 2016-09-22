import uglify from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'

export default {
    entry: 'app/index.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        buble(),
        uglify()
    ]
}
