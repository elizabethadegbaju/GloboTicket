import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from "react-native";

const News = () => {
    const [isLoaded, setDataLoaded] = useState(true);
    const [storyData, setStoryData] = useState();

    const getNews = async () => {
        try{
            let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            let stories = await response.json();
            setStoryData(stories);
            setDataLoaded(false);
        } catch(error){
            console.error(error);
        }
    };
}