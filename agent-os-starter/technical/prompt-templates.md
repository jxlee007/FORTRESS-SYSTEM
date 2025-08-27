# Prompt Templates

This document contains reusable prompt templates with inputs, constraints, outputs, and fallbacks.

## General Conversation
- **Input:** The user's message.
- **Constraints:** The response should be polite, helpful, and concise.
- **Output:** A natural language response.
- **Fallback:** "I'm sorry, I don't understand. Could you please rephrase your question?"
- **Template:**
  ```
  You are a helpful assistant. Please respond to the user's message.
  User: {user_message}
  Assistant:
  ```

## Code Generation
- **Input:** A natural language description of the desired code.
- **Constraints:** The generated code should be correct, efficient, and well-documented.
- **Output:** A code block in the specified language.
- **Fallback:** "I'm sorry, I'm not able to generate code for that request. Please try a different request."
- **Template:**
  ```
  You are a helpful coding assistant. Please generate code based on the user's request.
  Request: {user_request}
  Language: {language}
  Code:
  ```

## Text Summarization
- **Input:** A long piece of text.
- **Constraints:** The summary should be concise and capture the main points of the text.
- **Output:** A summary of the text.
- **Fallback:** "I'm sorry, I'm not able to summarize that text. Please try a different text."
- **Template:**
  ```
  Please summarize the following text in no more than 3 sentences.
  Text: {text}
  Summary:
  ```

## Question Answering
- **Input:** A question and a context.
- **Constraints:** The answer should be extracted from the context and should be accurate.
- **Output:** The answer to the question.
- **Fallback:** "I'm sorry, I can't find the answer to that question in the provided text."
- **Template:**
  ```
  Please answer the following question based on the provided context.
  Context: {context}
  Question: {question}
  Answer:
  ```
