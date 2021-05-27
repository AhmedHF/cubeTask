// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from './src/screens/Movies/Movies';
import MovieDetails from './src/screens/MovieDetails/MovieDetails';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com${queryKey[0]}`);
  return data;
};

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  }
)

const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
}

export default App;