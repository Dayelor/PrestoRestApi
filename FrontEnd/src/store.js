import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    // Aquí se pueden agregar los reducers de las diferentes partes de la aplicación
    // Por ejemplo, si tienes un reducer para la autenticación, lo agregarías aquí
    // auth: authReducer,
  },
  // Middleware para manejar acciones asincrónicas y otras tareas
  // Puedes agregar middlewares personalizados si es necesario
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck: false,
  }),

});