import { supabase } from '../lib/supabase'

export function useSession() {
    async function signIn(email: string, password: string) {
        console.log('this signIn as well!!')
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) return error

        const { data } = await supabase.auth.getSession()
        //console.log(data.session?.user.app_metadata) 
        //console.log(data.session?.user.email) // the logged-in user's email, or undefined
    }
    return { signIn }
}