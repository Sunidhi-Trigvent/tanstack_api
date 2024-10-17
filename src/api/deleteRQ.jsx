// import { useMutation, useQueryClient } from 'react-query'; // Import useQueryClient
// import useCrud from '../hooks/useCrud'; // Import the useCrud hook

// // Rename to follow the hook naming convention
// const useDeleteRQ = () => {
//     // const { deleteData } = useCrud(); // Get the delete function from useCrud
//     const queryClient = useQueryClient(); // Get the query client instance

//     // Create the delete mutation
//     const deleteMutation = useMutation({
//         mutationFn: (id) => deleteData(id),
//         onSuccess: (data, id) => {
//             console.log(data, id);

//             // Update the products data in the cache after deletion
//             queryClient.setQueryData(["products"], (curElem) => {
//                 return curElem?.filter((postId) => postId.id !== id); // Ensure you're comparing the correct property
//             });
//         }
//     });

//     return { deleteMutation }; // Return the mutation object
// };

// export default useDeleteRQ;
