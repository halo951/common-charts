import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { RollupOptions } from 'rollup'
import pkg from './package.json'

const banner: string = `
/** ${pkg.name}
 *
 * @author ${pkg.author.name}(${pkg.author.url})
 * @license ${pkg.license}
 */`.trim()

/** export rollup.config */
export default async (): Promise<RollupOptions | Array<RollupOptions>> => {
    const outType: Array<'cjs' | 'es'> = ['cjs', 'es']

    return outType.map((format) => {
        return {
            treeshake: false,
            strictDeprecations: false,
            input: 'lib/index.ts',
            plugins: [
                typescript({ clean: true, useTsconfigDeclarationDir: true, abortOnError: true }),
                // compress
                terser()
            ],
            output: {
                exports: 'auto',
                inlineDynamicImports: true,
                banner,
                format,
                file: `dist/index.${format}.js`
            }
        }
    })
}
