import Toast from "react-native-toast-message"

export const ToastUtils = {
  showSuccessToast: (title: string, message: any) => {
    Toast.show({
      type: "success",
      text1: title,
      text2: typeof message === "object" ? JSON.stringify(message).substring(0, 60) + "..." : message,
      position: "bottom",
      visibilityTime: 4000,
    })
  },

  showErrorToast: (title: string, message: string) => {
    Toast.show({
      type: "error",
      text1: title,
      text2: message,
      position: "bottom",
      visibilityTime: 4000,
    })
  },

  showInfoToast: (title: string, message: string) => {
    Toast.show({
      type: "info",
      text1: title,
      text2: message,
      position: "bottom",
      visibilityTime: 3000,
    })
  },
}
