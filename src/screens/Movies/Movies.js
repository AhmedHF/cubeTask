//import liraries
import React, { useState } from 'react';
import { View, Text, ActivityIndicator, SectionList, TouchableOpacity } from 'react-native';
import { useInfiniteQuery } from 'react-query'
import axios from 'axios';
import { API_ENDPOINT, API_KEY, } from '../../configs/Urls';
import MovieItem from './MovieItem';
import colors from '../../configs/colors';
import styles from './stylesMovies';

// create a component
const Movies = ({ navigation }) => {
    const [selectedType, setSelectedType] = useState('upcoming')

    const [page, setPage] = React.useState(0)
    const [movies, setMovies] = useState([]);
    const fetchMovies = async ({ pageParam = 1 }) =>
        await axios.get(
            `${API_ENDPOINT}${selectedType}${API_KEY}&page=${pageParam}`).then((res) => {
                setMovies(movies.concat(res.data.results))
                return { ...res.data, data: res.data.results }
            });

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(['movies', { type: selectedType }], fetchMovies, {
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    })

    const renderItem = ((item) => {
        const movie = item.item;
        return (
            <MovieItem {...{ movie }} {...{ navigation }} />
        )
    });
    const renderFooter = (() => {
        if (isFetching)
            return (
                <View style={[styles.container]}>
                    <ActivityIndicator size={35} color={'black'} />
                </View>
            );
    });

    const renderType = (type) => {
        return (
            <TouchableOpacity
                style={[styles.movieType,
                selectedType === type ? {
                    backgroundColor: colors.green,
                    elevation: 15,
                }
                    : {}]}
                onPress={() => {
                    setSelectedType(type)
                }}
            >
                <Text style={selectedType === type ?
                    styles.selectedTextMovieType : styles.textMovieType}
                >{type === 'popular' ? 'Popular' : type === 'upcoming' ? 'Upcoming' : 'Top Rated'}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.typesContainer}>
                {renderType('upcoming')}
                {renderType('popular')}
                {renderType('top_rated')}
            </View>
            {/* <FlatList
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item, index)  => item.id+index}
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        setPage(page + 1)
                        fetchNextPage()
                    }}
                /> */}
            {data ?
                <SectionList
                    sections={data?.pages}
                    refreshing={selectedType}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={renderItem}
                    renderSectionHeader={({ section: { page } }) => (
                        <Text style={styles.header}>{'Page : ' + page}</Text>
                    )}
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        setPage(page + 1);
                        fetchNextPage();
                    }}
                    renderSectionFooter={renderFooter} />
                :
                <View style={[styles.container]}>
                    <ActivityIndicator size={35} color={'black'} />
                </View>
            }
        </View>
    );
};

//make this component available to the app
export default Movies;
