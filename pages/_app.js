import React from "react";
import makeStore from '../store';
import {Provider} from "react-redux";
import App from "next/app";
import Layout from "../components/Layout";
import withRedux from "next-redux-wrapper";
import '../styles/index.scss';
class Jays extends App {
    
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        );
    }

}

export default withRedux(makeStore)(Jays);