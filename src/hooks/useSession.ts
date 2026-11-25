import { supabase } from '../lib/supabase'
import type { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

export function useSession() {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session)
            setLoading(false)
        })

        const { data: { subscription }} = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    async function signOut() {
        await supabase.auth.signOut()
    }
    async function signIn(email: string, password: string) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        return error
    }
    return { session, loading, signIn, signOut }
}