import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  label: string;
  variant: "primary" | "secondary" | "outlined";
}

const variants = {
  primary: "border-transparent bg-indigo-600",
  secondary: "border-transparent bg-indigo-600",
  outlined: "border border-gray-300 bg-white",
};

const textVariants = {
  primary: "text-white",
  secondary: "text-white",
  outlined: "text-gray-700",
};

export function ButtonFullWidth({ label, variant, ...props }: ButtonProps) {
  return (
    <Pressable
      //className="py-2 px-4 mb-2 border-transparent rounded-lg shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      className={`py-2 px-4 mb-2 rounded-lg shadow-sm ${variants[variant]}`}
      {...props}
    >
      <Text
        className={`font-semibold text-center text-base ${textVariants[variant]}`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
