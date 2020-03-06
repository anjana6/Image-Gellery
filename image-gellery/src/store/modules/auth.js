import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../main';

const state = {
    token:window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions ={
    login: () => {
        api.login();
    },
    finalizeLogin({commit},hash ){
        // console.log('hii');
        const query = qs.parse(hash.replace('#',''));
        // console.log(query.access_token);

        commit('setToken',query.access_token); 
        window.localStorage.setItem('imgur_token',query.access_token);
        router.push('/image'); 
    },

    logout: ({commit}) => {
        commit('setToken',null);
        window.localStorage.removeItem('imgur_token');
    }
};

const mutations = {
    setToken: (state,token) =>{
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}