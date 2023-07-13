// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import {Blog} from '../../types/Blog';
// import axios from 'axios';

// interface initialStateType {
//   loading: 'rejected' | 'pending' | 'fullfilled' | null;
//   places: Array<any> | any;
//   error: any | null;
//   place: any | null;
// }

// const initialState: initialStateType = {
//   loading: 'fullfilled',
//   places: [],
//   error: null,
//   place: null,
// };

// export const getAllPlaces = createAsyncThunk(
//   'get/all',
//   async (data, {rejectWithValue}) => {
//     // console.log('loading data');

//     try {
//       // const res = await axios.get(
//       //   'https://64731455d784bccb4a3c3e14.mockapi.io/blogs'
//       // );
//       // console.log('data geldi');

//       // return res.data;

//      const data = (await axios.get('http://10.0.2.2:8080/api/places')).data

//     //  console.log(data,"log in 34 dataslice ts");

//      return data;
    
      
//     } catch (error: any) {
//       // console.log("error while getting data placesr");
      
//       rejectWithValue(error);
//     }
//   },
// );

// export const getCurrentPlace = createAsyncThunk(
//   'get/current',
//   async (data: any, {rejectWithValue}) => {
//     try {
//       // console.log('burda1');
//       let {id} = data;
//       const res = await axios.get(
//         `https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${id}`,
//       );
//       // console.log('current blog data api ', res);
//       return res.data;
//     } catch (error: any) {
//       rejectWithValue(error);
//     }
//   },
// );

// // export const deleteBlogByID = createAsyncThunk(
// //   'delete',
// //   async (data: any, {rejectWithValue}) => {
// //     try {
// //       console.log('burda2');
// //       let {id} = data;
// //       const res = await axios.delete(
// //         `https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${id}`,
// //       );
// //       if (res.data) {
// //         let all = await axios.get(
// //           'https://64731455d784bccb4a3c3e14.mockapi.io/blogs/',
// //         );
// //         return all.data;
// //       }
// //     } catch (error: any) {
// //       rejectWithValue(error);
// //     }
// //   },
// // );

// const placeslice = createSlice({
//   name: 'placeslice',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(getAllPlaces.pending, state => {
//         state.loading = 'pending';
//         // console.log('pending eledi');
//       })
//       .addCase(getAllPlaces.rejected, (state, action) => {
//         state.loading = 'rejected';
//         state.error = action.payload;
//         // console.log('reject eledi');
//       })
//       .addCase(getAllPlaces.fulfilled, (state, action) => {
//         state.places = action.payload;
//         state.loading = 'fullfilled';
//         // console.log('fullfilled eledi');
//       });

//     // builder
//     //   .addCase(getCurrentBlog.pending, state => {
//     //     state.loading = 'pending';
//     //   })
//     //   .addCase(getCurrentBlog.rejected, (state, action) => {
//     //     state.loading = 'rejected';
//     //     state.error = action.payload;
//     //   })
//     //   .addCase(getCurrentBlog.fulfilled, (state, action) => {
//     //     state.blog = action.payload;
//     //     state.loading = 'fullfilled';
//     //   });
//     // builder
//     //   .addCase(deleteBlogByID.pending, state => {
//     //     state.loading = 'pending';
//     //   })
//     //   .addCase(deleteBlogByID.rejected, (state, action) => {
//     //     state.loading = 'rejected';
//     //     state.error = action.payload;
//     //   })
//     //   .addCase(deleteBlogByID.fulfilled, (state, action) => {
//     //     state.loading = 'fullfilled';
//     //     state.blogs = action.payload;
//     //   });
//   },
// });

// export default placeslice.reducer;
