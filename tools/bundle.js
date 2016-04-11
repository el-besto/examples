import webpack from 'webpack';
import webpackConfig from './webpack.config';

function bundle() {
    return new Promise((resolve, reject) => {
        const bundler = webpack(webpackConfig);
        const run = (err, stats) => {
            if (err) {
                reject(err);
            } else {
                console.log(stats.toString(webpackConfig[0].stats));
                resolve();
            }
        };
        bundler.run(run);
    });
}

export default bundle;
