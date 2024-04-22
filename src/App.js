import { useState } from 'react';
import css from './App.css'
import plus from './plus-sign.png'
import Accordion from './Components/accordion';
import RandomColor from './Components/random-color';
import StarRating from './Components/star-rating';
import ImageSlider from './Components/image-sliders';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/tree-view';
import QRCodeGenerator from './Components/qr-code-generator';
import LightDarkMode from './Components/light-dark-mode';
import ScrollIndicator from './Components/scroll-indicator';
import TabTest from './Components/custom-tabs/tab-test';
import ModalTest from './Components/custom-model-popup/modal-test';
import GitHubProfileFinder from './Components/github-profile-finder';
import SearchAutocomplete from './Components/search-autocomplete-with-api';
import TicTacToe from './Components/tic-tac-toe';
import FeatureFlagGlobalState from './Components/feature-flag/context';
import FeatureFlag from './Components/feature-flag';
import UseFetchHookTest from './Components/use-fetch/test';
import UseOnclickOutSideTest from './Components/use-outside-click';
import UseWindowResize from './Components/use-window-resize/test';
import ScrollToTopAndBottom from './Components/scroll-to-top-and-bottom';
import ScrollToSection from './Components/scroll-to-top-and-bottom/scroll-to-section';
import Weather from './Components/weather-app/components/weather';
export default function AccordionLists(){
   return (
    <div className='App'>
      {/* Accordion */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}
      
      {/* Start Rating */}
      {/* < StarRating noOfStars={10} /> */}

      {/* Image Sliders */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* Load More Data */}
      {/* <LoadMoreData /> */}

      {/* Tree View */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code */}
      {/* <QRCodeGenerator /> */}

      {/* Dark Light Mode With Custom Hook */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* Tabs */}
      {/* <TabTest /> */}

      {/* custom model popup */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GitHubProfileFinder /> */}

      {/* Search AutoComplete with API */}
      {/* <SearchAutocomplete /> */}

      {/* Tic-Tac-Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag with context */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* UseFetch Custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick outside Hook test */}
      {/* <UseOnclickOutSideTest /> */}

      {/* Use Window resize hook test */}
      {/* <UseWindowResize /> */}

      {/* Scroll To Top to Bottom */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll To a particular section */}
      {/* <ScrollToSection /> */}

      {/* Weather App */}
      <Weather />
    </div>
   );
    
}
