import React, { Component } from 'react';
import Aux from '../Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        
        UNSAFE_componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            })
            
            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        
        errorModalHandler = () => {
            this.setState({ error: null });
        }

        render(){
            return(
                <Aux>
                    <Modal
                        buyMode={this.state.error}
                        modalClosed={this.errorModalHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;