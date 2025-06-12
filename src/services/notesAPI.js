import axios from 'axios'

const API_URL = "https://penvbtejmwekjrkozfvb.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlbnZidGVqbXdla2pya296ZnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODUyNjMsImV4cCI6MjA2NTI2MTI2M30.SFhY538JfXrxl5jKa_Faa9awkMPmGH6mflG3DFRrvnI"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },

    async updateNote(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
        return response.data
    }
}
