import { useEffect } from "react";
import { useSharedValue, withRepeat, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";

export const useScalingOpacityAnimation = () => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.2, {
                duration: 5000,
                easing: Easing.out(Easing.exp),
            }),
            -1
        );

        opacity.value = withRepeat(
            withTiming(0, {
                duration: 5000,
                easing: Easing.out(Easing.exp),
            }),
            -1
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    return animatedStyle;
};