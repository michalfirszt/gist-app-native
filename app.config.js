import "dotenv/config";

export default {
    name: process.env.APP_NAME,
    extra: {
        gistToken: process.env.GIST_TOKEN,
    }
}
