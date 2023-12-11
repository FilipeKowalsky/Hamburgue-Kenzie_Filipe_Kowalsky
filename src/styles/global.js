import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`:root {
	--color-color-primary: #27ae60;
	--color-color-primary-5: #27ae5f90;
	--color-color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-400: #BDBDBD;
	--color-grey-300: #828282;
	--color-grey-300-3: #82828259;
	--color-grey-100: #e0e0e0;
	--color-grey-0: #f5f5f5;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
  }

*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

  #root{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
	}

  body, html {
		width: 100vw;
		height: 100vh;
		background: var(--color-background);
		overflow-x: hidden;
	}

  body, input, button, textarea{
		font-family: 'Inter', sans-serif;
	}
  
  button{
		cursor: pointer;
	}

	ul {
		list-style: none;
	}
`