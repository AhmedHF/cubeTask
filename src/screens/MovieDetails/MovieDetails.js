//import liraries
import axios from 'axios';
import React, { } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useQuery } from 'react-query'
import List from '../../components/List/List';
import { API_ENDPOINT, API_IMAGE, API_KEY } from '../../configs/Urls';
import styles from './styles';

const MovieDetails = ({ route, navigation }) => {
    const { movieId } = route.params;
    const useGetMovies = () => {
        return useQuery("movieDetails", async () => {
            const { data } = await axios.get(
                `${API_ENDPOINT}${movieId}${API_KEY}`
            );
            return data;
        });
    }

    const { status, data, error, isFetching } = useGetMovies();

    const useGetMoviesCredit = () => {
        return useQuery("credits", async () => {
            const { data } = await axios.get(
                `${API_ENDPOINT}${movieId}/credits${API_KEY}`
            );
            return [...data?.cast, ...data?.crew];
        });
    }

    const {
        data: creditsData,
    } = useGetMoviesCredit();

    const rendererLoading = () => {
        return (
            <View style={[styles.container]}>
                <ActivityIndicator size={35} color={'black'} />
            </View>
        )
    };

    const renderError = () => {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        )
    };

    return (
        <ScrollView style={styles.container}>
            {data ?
                <>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: `${API_IMAGE}${data.poster_path}` }} />
                        <Text style={styles.title}>{data?.title}</Text>
                        <Text style={styles.vote}>{data?.vote_average}</Text>
                    </View>
                    <Text style={styles.overview}>{'Overview'}</Text>
                    <Text style={styles.text}>{data?.overview}</Text>
                    <Text style={styles.overview}>{'Genres'}</Text>
                    <View style={styles.listContainer}>
                        <List
                            horizontal
                            data={data?.genres}
                            renderItem={(item, index) =>
                                <View style={styles.genresItem}>
                                    <Text style={styles.listText}>{item.name}</Text>
                                </View>
                            }
                        />
                    </View>
                    <Text style={styles.overview}>{'Credits'}</Text>

                    <View style={styles.listContainer} key={'credits'}>
                        <List
                            horizontal
                            data={creditsData}
                            renderItem={(item, index) =>
                                <View style={styles.creditsItem}>
                                    <Image
                                        style={styles.creditImage}
                                        source={{ uri: `${API_IMAGE}${item.profile_path}` }} />
                                    <Text style={[styles.listText]}>{item.original_name}</Text>
                                </View>
                            }
                        />
                    </View>
                    <View style={{ height: 50 }}></View>
                </>
                :
                isFetching ? rendererLoading()
                    :
                    error ? renderError()
                        : null
            }
        </ScrollView>
    );
};

//make this component available to the app
export default MovieDetails;
