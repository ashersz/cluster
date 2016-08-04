Meteor.methods({
  'cluster_pickEndpoint': function(serviceName) {
    check(serviceName, String);
    var endpoint = Cluster.discovery.pickEndpoint(serviceName);
    console.log("debug:service=" + serviceName+ " " + "endpoint="+ endpoint);
    var endpointHash = Cluster.discovery.endpointToHash(endpoint);
    console.log("debug:endpointHash=" + endpointHash);
    var balancer =
      Cluster.discovery.pickBalancer(endpointHash);

    if (balancer){
      console.log("debug:balancer=" + balancer);
      return balancer;
    }

    console.log("debug:endpoint=" + endpoint);
    return endpoint;
  }
});
