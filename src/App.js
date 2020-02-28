import React, { Component } from 'react';
import Header from './components/Header';
import Headbar from './components/Headbar';
import Banner from './components/Banner';
import Lkmaytinh from './components/Lkmaytinh';
import Lkmayin from './components/Lkmayin';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Bottombar from './components/Bottombar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="webWrap">
                <div className="container">
                    {/* <!-- header --> */}
                    <Header />
                    {/* <!-- headbar --> */}
                    <Headbar />
                    {/* <!-- banner --> */}
                    <Banner />
                    {/* <!-- body linh kien may tinh--> */}
                    <Lkmaytinh />
                    {/* <!-- linh kien may in --> */}
                    <Lkmayin />
                    <Notes />
                    {/* <!-- footer	 --> */}
                    <Footer />
                    <Bottombar />
                </div>
            </div>
        );
    }
}

export default App;