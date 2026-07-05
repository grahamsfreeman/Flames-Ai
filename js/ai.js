class FlamesAI {

    constructor(){

        this.provider = "OpenAI";

    }

    async generate(prompt){

        console.log("AI Prompt:", prompt);

        // Backend call will be added later

        return {

            success:true,

            response:"AI response will appear here."

        };

    }

}

const flamesAI = new FlamesAI();
