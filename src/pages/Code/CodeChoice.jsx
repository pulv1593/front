import { useEffect } from "react";
import axios from "axios";

// 이 부분은 추후 수정해야됨.
const CodeChoice = () => {
// 	postId, code_id가 필요할것 임.
	const redirect_uri = import.meta.env.VITE_BACK_REDIRECT_URI;
	const postId = post.postId;
	const code_id = code_id
	
	useEffect(() => {
		const codeChoice = async() => {
			try {
				const res = axios.post(`${redirect_uri}/code/choice`, {
				code_id = code_id,
				postId = postId,
			});
			}
		}

	});
}