export const changeBgColor = (bgColor) => {
	return {
		type: "theme/changeBgColor",
		payload: bgColor,
	};
};

export const changeTextColor = (textColor) => {
	return {
		type: "theme/changeTextColor",
		payload: textColor,
	};
};

export const resetTheme = () => {
	return {
		type: "theme/reset",
	};
};
