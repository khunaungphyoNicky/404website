<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    <div class="max-w-7xl mx-auto p-4">
      <!-- Section Header -->
      <div class="text-center mb-12 pt-8">
        <h1 class="text-5xl font-bold text-white mb-4">Server Status</h1>
        <p class="text-xl text-purple-200">Real-time monitoring of our VPN servers worldwide</p>
      </div>

      <!-- Header Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Total Online Users -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
          <div class="text-center">
            <p class="text-purple-200 text-sm font-medium mb-2">Total Online Users</p>
            <div class="text-4xl font-bold text-white mb-2">{{ totalOnlineUsers }}</div>
            <div class="flex items-center justify-center">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span class="text-green-300 text-sm">Live</span>
            </div>
          </div>
        </div>

        <!-- Active Servers -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
          <div class="text-center">
            <p class="text-purple-200 text-sm font-medium mb-2">Active Servers</p>
            <div class="text-4xl font-bold text-white mb-2">{{ activeServers }}/10</div>
            <div class="text-blue-300 text-sm">Servers Online</div>
          </div>
        </div>

        <!-- Last Updated -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
          <div class="text-center">
            <p class="text-purple-200 text-sm font-medium mb-2">Last Updated</p>
            <div class="text-lg font-medium text-white mb-2">
              {{ lastUpdated || 'Never' }}
            </div>
            <button
              @click="fetchAllServers"
              :disabled="isRefreshing"
              class="bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white text-sm px-4 py-1 rounded-lg transition-all duration-200"
            >
              {{ isRefreshing ? 'Refreshing...' : 'Refresh' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Server Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <div
          v-for="server in servers"
          :key="server.id"
          class="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-200"
        >
          <div class="text-center">
            <!-- Server Name -->
            <h3 class="text-white font-semibold text-lg mb-3">{{ server.name }}</h3>
            
            <!-- Online Count Card -->
            <div :class="`bg-gradient-to-r ${getServerStatusColor(server.status)} rounded-xl p-4 mb-3`">
              <div class="flex items-center justify-center mb-2">
                <div v-if="server.status === 'loading'" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <div v-else :class="`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-300 animate-pulse' : 'bg-red-300'}`"></div>
                <span class="ml-2 text-white text-xs font-medium uppercase">
                  {{ server.status }}
                </span>
              </div>
              
              <div class="text-2xl font-bold text-white">
                {{ server.status === 'loading' ? '...' : server.online }}
              </div>
              
              <div class="text-white/80 text-xs mt-1">
                {{ server.status === 'loading' ? 'Loading...' : 'users online' }}
              </div>
            </div>

            <!-- Server URL Display -->
            <div class="text-purple-200 text-xs font-mono bg-black/20 rounded-lg px-2 py-1 truncate">
              {{ server.url.split(':')[0] }}:8888
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Status -->
      <div class="mt-8 text-center pb-12">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
          <span class="text-white text-sm">
            Monitoring {{ servers.length }} servers • Auto-refresh every 30s
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerMonitorPage',
  data() {
    return {
      servers: [
        { id: 1, name: 'Thailand 1', url: '103.107.54.158:8888/server/online', online: 0, status: 'loading' },
        { id: 2, name: 'Thailand 2', url: '103.107.54.159:8888/server/online', online: 0, status: 'loading' },
        { id: 3, name: 'Thailand 3', url: '103.107.54.160:8888/server/online', online: 0, status: 'loading' },
        { id: 4, name: 'Singapore 1', url: '103.107.54.161:8888/server/online', online: 0, status: 'loading' },
        { id: 5, name: 'Singapore 2', url: '103.107.54.162:8888/server/online', online: 0, status: 'loading' },
        { id: 6, name: 'Japan 1', url: '103.107.54.163:8888/server/online', online: 0, status: 'loading' },
        { id: 7, name: 'Japan 2', url: '103.107.54.164:8888/server/online', online: 0, status: 'loading' },
        { id: 8, name: 'Korea 1', url: '103.107.54.165:8888/server/online', online: 0, status: 'loading' },
        { id: 9, name: 'India 1', url: '103.107.54.166:8888/server/online', online: 0, status: 'loading' },
        { id: 10, name: 'Australia 1', url: '103.107.54.167:8888/server/online', online: 0, status: 'loading' }
      ],
      lastUpdated: null,
      isRefreshing: false,
      intervalId: null
    }
  },
  computed: {
    totalOnlineUsers() {
      return this.servers.reduce((total, server) => {
        return server.status === 'online' ? total + server.online : total;
      }, 0);
    },
    activeServers() {
      return this.servers.filter(server => server.status === 'online').length;
    }
  },
  methods: {
    async fetchServerData(server) {
      try {
        console.log(`Fetching data from: http://${server.url}`);
        
        const response = await fetch(`http://${server.url}`, {
          method: 'GET',
          mode: 'cors', // Add CORS mode
        });
        
        console.log(`Response status for ${server.name}:`, response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Since the API returns plain text number, parse as text then convert to number
        const data = await response.text();
        console.log(`Raw response for ${server.name}:`, data);
        
        const onlineCount = parseInt(data.trim()) || 0;
        console.log(`Parsed count for ${server.name}:`, onlineCount);
        
        return { online: onlineCount, status: 'online' };
      } catch (error) {
        console.error(`Error fetching data for ${server.name}:`, error);
        return { online: 0, status: 'offline' };
      }
    },
    async fetchAllServers() {
      this.isRefreshing = true;
      
      const promises = this.servers.map(async (server, index) => {
        const result = await this.fetchServerData(server);
        this.servers[index] = { ...server, ...result };
      });
      
      await Promise.all(promises);
      this.lastUpdated = new Date().toLocaleTimeString();
      this.isRefreshing = false;
    },
    getServerStatusColor(status) {
      switch (status) {
        case 'online': return 'from-green-400 to-emerald-500';
        case 'offline': return 'from-red-400 to-red-600';
        default: return 'from-gray-400 to-gray-500';
      }
    }
  },
  mounted() {
    this.fetchAllServers();
    // Update every 30 seconds
    this.intervalId = setInterval(this.fetchAllServers, 30000);
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
</script>