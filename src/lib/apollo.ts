import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o73rhc0x3j01xid8rw3r33/master',
    cache: new InMemoryCache()
})