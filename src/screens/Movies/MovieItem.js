import moment from 'moment';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { API_IMAGE } from '../../configs/Urls';
import styles from './styles';

const MovieItem = ({ movie, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('MovieDetails', { movieId: movie.id })}
        >
            <Image
                style={styles.image}
                source={{ uri: `${API_IMAGE}${movie.poster_path}` }} />
            <View style={styles.details}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.date}>{moment(movie.release_date).format('MMM DD, YYYY')}</Text>

                <View style={styles.genresView}>
                    {movie?.genre_ids.map((item, index) =>
                        <View style={styles.genresItem}>
                            <Text style={styles.listText}>{item}</Text>
                        </View>)
                    }
                </View>
                <View style={styles.voteView}>
                    <Text style={styles.vote}>{movie?.vote_average}</Text>
                </View>
            </View>

        </TouchableOpacity >
    );
};

export default MovieItem;
