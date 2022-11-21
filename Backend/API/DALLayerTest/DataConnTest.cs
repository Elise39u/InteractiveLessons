using System.Data;
using MySqlConnector;
using DALLayer;
using NUnit.Framework;

namespace DALLayerTest;

public class DataConnTest
{
    public DBConnection DbConnection = new DBConnection();
    
    [SetUp]
    public void SetUp()
    {
        
    }
    
    [Test]
    public void Should_Connect_To_Database_Success()
    {
        Assert.AreEqual(ConnectionState.Closed, DbConnection.Conn.State, "Database Connect is not closed but rather "
                                                                         + DbConnection.Conn.State);
        DbConnection.OpenConnection();
        Assert.AreEqual(ConnectionState.Open, DbConnection.Conn.State, "Database connection has not opened, instead is; " 
                                                                       + DbConnection.Conn.State);
        DbConnection.CloseConnection();
    }

    [Test]
    public void Should_Close_Connection_Success()
    {
        DbConnection.OpenConnection();
        Assert.AreEqual(ConnectionState.Open, DbConnection.Conn.State, "Database connection has not opened, instead is; " 
                                                                       + DbConnection.Conn.State);
        DbConnection.CloseConnection();
        Assert.AreEqual(ConnectionState.Closed, DbConnection.Conn.State, "Database Connect has not closed, instead is: "
                                                                         + DbConnection.Conn.State);
    }
}