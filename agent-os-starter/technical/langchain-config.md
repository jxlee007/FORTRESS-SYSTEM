# LangChain Configuration

This document describes the configuration of LangChain, including the model, provider, routing, persistence, and evaluation settings.

## Model
- **Model Name:** `gpt-4`
- **Temperature:** `0.7`
- **Max Tokens:** `2048`

## Provider
- **Provider:** `OpenAI`
- **API Key:** Stored in the `.env` file as `OPENAI_API_KEY`.

## Routing
- **Router Chain:** A chain that routes requests to the appropriate agent based on the user's input.
- **Default Agent:** The agent that is used when no specific agent is requested.

## Persistence
- **Vector Store:** Pinecone will be used to store embeddings for long-term memory.
- **Chat History:** Chat history will be stored in the Convex database.

## Evaluation
- **Evaluator:** A custom evaluator will be used to assess the quality of the AI model's responses.
- **Metrics:**
    - **Relevance:** How relevant is the response to the user's query?
    - **Coherence:** How coherent and well-structured is the response?
    - **Helpfulness:** How helpful is the response in addressing the user's needs?

## Example Configuration
```python
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

# Initialize the language model
llm = ChatOpenAI(
    model_name="gpt-4",
    temperature=0.7,
    max_tokens=2048,
    openai_api_key=os.environ["OPENAI_API_KEY"]
)

# Initialize the memory
memory = ConversationBufferMemory()

# Initialize the conversation chain
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)
```
