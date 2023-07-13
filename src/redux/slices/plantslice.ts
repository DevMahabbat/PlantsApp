import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';
import { Plant } from '../types/Plant';


interface initialStateType {
  loading: 'rejected' | 'pending' | 'fullfilled' | null;
  plants: Array<Plant> | any;
  error: Error | null | any;
  currentPlant: Plant | null;
}

const initialState: initialStateType = {
  loading: 'fullfilled',
  plants: [],
  error: null,
  currentPlant: null,
};

export const getAllPlants = createAsyncThunk(
  'get/all',
  async (data, {rejectWithValue}) => {

 
    try {
      const res = await axios.get('http://10.0.2.2:3000/plants');
      console.log("Plant data fetched");
      return await res.data;
    } catch (error: any) {
      rejectWithValue(error);
    }
  },
);

export const getCurrentPlant = createAsyncThunk("get/current", async (data:any, {rejectWithValue}) => {
    
    try {
      // console.log("burda1");
        let {id} = data;
      const res = await(axios.get(`http://10.0.2.2:3000/plants/${id}`));
console.log('Current Plant Fetched');
      return await res.data;
    } catch (error: any) {
      rejectWithValue(error);
    }

})


// export const deleteBlogByID = createAsyncThunk(
//   'delete',
//   async (data: any, {rejectWithValue}) => {
//     try {
//         //  console.log('burda2');
//       let {id} = data;
//       const res = await axios.delete(
//         `https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${id}`,
//       )
//         if (res.data) {
//           let all = await axios.get(
//             'https://64731455d784bccb4a3c3e14.mockapi.io/blogs/',
//           );
//           return all.data;
//         };
      
 
//     } catch (error: any) {
//       rejectWithValue(error);
//     }
//   },
// );


const plantslice = createSlice({
  name: 'plantslice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPlants.pending, state => {
        state.loading = 'pending';
      })
      .addCase(getAllPlants.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
      })
      .addCase(getAllPlants.fulfilled, (state, action) => {
        state.plants = action.payload;
        state.loading = 'fullfilled';
  
      }) 
      
        builder
          .addCase(getCurrentPlant.pending, state => {
            state.loading = 'pending';
          })
          .addCase(getCurrentPlant.rejected, (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
          })
          .addCase(getCurrentPlant.fulfilled, (state, action) => {
            state.currentPlant = action.payload;
            state.loading = 'fullfilled';
          })


          // builder
          //   .addCase(deleteBlogByID.pending, state => {
          //     state.loading = 'pending';
          //   })
          //   .addCase(deleteBlogByID.rejected, (state, action) => {
          //     state.loading = 'rejected';
          //     state.error = action.payload;
          //   })
          //   .addCase(deleteBlogByID.fulfilled, (state, action) => {
          //     state.loading = 'fullfilled';
          //     state.blogs = action.payload;
          //   });
      
  },
});

export default plantslice.reducer;
